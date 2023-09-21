import React, { useEffect, useState } from "react";
import { ReactComponent as ArrowDropDown} from "../images/arrow_drop_downwn.svg"
import '../styles/TrendsContainer.scss'
import axios from "axios";
import { ResponseData, trendingSearches, TrendData } from "../interfaces/trendingsearch-interface";
import TrendsRow from "../components/TrendRow";

const TrendsContainer: React.FC<unknown> = () => {

    const [trends, setTrends] = useState<ResponseData>();

    useEffect(() => {
        axios.get('https://trends-api.weoja.dev/daily-searches?geo=VN&lang=vi&key=81dc9bdb52d04dc20036dbd8313ed055')
      .then((response) => {
        setTrends(response.data.default);
      })
    },[])

    return(
        <div className="trendsBody">
            <div className="filterTrends">
                <div className="bydate">
                    <div>Date (State = Today)</div>
                    <div>
                        <ArrowDropDown/>
                    </div>
                </div>
                <div className="geo">
                    <div>Vietnam (State = Selected)</div>
                    <div>
                        <ArrowDropDown/>
                    </div>
                </div>
            </div>
            <div className="trendsData">
                {
                    trends?.trendingSearchesDays.map((el:trendingSearches, index:number) => {
                        return(
                            <div key={index} className="trendsDataByDate">
                                <div className="formatDate">{el.formattedDate}</div>
                                {
                                    el.trendingSearches.map((el:TrendData, index: number) => (
                                        <TrendsRow data={el} index={index} key={index}/>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TrendsContainer;