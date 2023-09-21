import React, { useState, useRef, useEffect } from "react";
import '../styles/TrendsRow.scss'
import { TrendData } from "../interfaces/trendingsearch-interface";
import { ReactComponent as ArrowUp } from '../images/arrowUparrowUp.svg';
import { ReactComponent as ArrowDown } from '../images/arrowdown.svg';
import { ReactComponent as ArrowLeft } from '../images/arrowLeft.svg';
import { ReactComponent as ArrowRight } from '../images/arrowRight.svg';

interface TrendsRow {
    data:TrendData,
    index:number
}
const TrendsRow: React.FC<TrendsRow> = (props) => {
    const styleBackground = {
        background: props.index === 0? 'linear-gradient(0deg, rgba(0, 0, 0, 0.07), rgba(0, 0, 0, 0.07)),linear-gradient(153.65deg, #EBFF00 -0.16%, #B5F701 29.2%, #7DFA02 62.28%, #6EFB00 89.31%)' : '#9B9B9B' 
    }
    const [open, setOpen] = useState(false);
    const containerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const divRef = useRef<HTMLDivElement | null>(null);
    const [divHeight, setDivHeight] = useState<number | null>(null);

    useEffect(() => {
        if (divRef.current) {
          const height: number = divRef.current.clientHeight;
          setDivHeight(height);
        }
      }, [open]);
    const nextItem = () => {
        if (currentIndex < props.data.articles.length - 2) {
          setCurrentIndex(currentIndex + 1);
        }
      };
    
    const prevItem = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
      };

    const itemWidth = 348;

    const translateX = -currentIndex * itemWidth;

    function decodeHTMLEntities(input:string) {
        var doc = new DOMParser().parseFromString(input, "text/html");
        return doc.documentElement.textContent;
      }
    
    return(
        <div className="trendsRow">
            <div className="trendsRowContainer" onClick={() => {setOpen(!open)}}>
                <div className="index" style={styleBackground}>
                    <div className="indexNumber">{props.index+1}</div>
                </div>
                <div className="keyword">
                    <div className="title">{props.data.title.query}</div>
                    <div className="searchCount">{props.data.formattedTraffic+" lượt tìm kiếm"}</div>
                </div>
                <div style={{flex:1}}></div>
                <div className="searchContinued">Tiếp tục tìm kiếm</div>
                <div className="arrow">
                    {open? <ArrowDown/>:<ArrowUp/>}
                </div>
            </div>
            <div className="collapse-container" style={{maxHeight:open?`${divHeight}px`:0}}>
                <div className="collapse-content" ref={divRef} >
                    <div className="divider"></div>
                    <div className="newsHeader">
                        <div className="a">Tin tức liên quan</div>
                        <div className="b">Xem thêm</div>
                    </div>
                    <div className="carousel">
                        <div className="buttonLeft" style={{visibility:currentIndex > 0?'visible':'hidden'}}>
                            <div className="buttonInside" onClick={() => prevItem()}><ArrowLeft/></div>
                        </div>
                        <div className="newsContainer">

                            <div 
                                className="newsList"         
                                style={{
                                    transform: `translateX(${translateX}px)`,
                                    transition: 'transform 0.3s ease',
                                }}
                                ref={containerRef}
                            >
                                {
                                    props.data.articles.map((el,index) => {
                                        return(
                                            <div className="newsItems" key={index}>
                                                <div className="titleNews">
                                                    <div className="source">
                                                        <span className="sourceNews">{el.source}</span>
                                                        <span style={{opacity:'0.5',fontSize:'11px'}}> · </span>
                                                        <span className="sourceTime">{el.timeAgo}</span>
                                                    </div>
                                                    <div className="title">{decodeHTMLEntities(el.title)}</div>
                                                </div>
                                                {el.image?<img src={el.image.imageUrl}/>:null}
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="buttonRight" style={{visibility: props.data.articles.length > 2 ? (currentIndex === props.data.articles.length - 2 ? 'hidden': 'visible'):'hidden'}}>
                            <div className="buttonInside" onClick={() => nextItem()}><ArrowRight/></div>
                        </div>
                    </div>
                    
                    {
                        props.data.relatedQueries.length > 0 ? (
                            <>
                                <div className="divider"></div>
                                <div className="connection">
                                    <div className="text">Từ khóa liên quan</div>
                                    <div className="relativeKeys">
                                        {
                                            props.data.relatedQueries.map((el, index) => {
                                                return(
                                                    <div key={index} className="relativeKey">
                                                        {el.query}
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </>
                        ): null
                    }

                </div>
            </div>
        </div>
    )
}

export default TrendsRow;