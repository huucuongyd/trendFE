import React, { useEffect, useState } from 'react';
import '../styles/UnderHeader.scss'

const UnderHeader: React.FC<unknown> = () => {
    
    const [backgroundFocus,setBackgroundFocus] = useState<string>('all');
    const tabs = ['all','image','video','news'];

    useEffect(()=>{
        tabs.forEach(el => {
            if(el !== backgroundFocus){
                const elementToChange = document.getElementById(el);
                elementToChange? elementToChange.style.background = 'white':null;
            }else{
                const elementToChange = document.getElementById(el);
                elementToChange? elementToChange.style.background = 'rgba(178, 247, 70, 1)':null;
            }
        })
    },[backgroundFocus])

    function changeBackroud(value:string) {
        setBackgroundFocus(value);
    }

  return (
    <div className="tabsBox">
        <div className="ant-tabs-nav-list" style={{ transform: 'translate(0px, 0px)' }}>
            <div className="ant-tabs-tab" onClick={() => changeBackroud('all')} id='all'>
                <div className="ant-tabs-tab-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                    </svg>
                    <span className="iconTab">All</span>
                </div>
            </div>
            <div data-node-key="image" className="ant-tabs-tab" onClick={() => changeBackroud('image')} id='image'>
                <div className="ant-tabs-tab-btn">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4.86 8.86-3 3.87L9 13.14 6 17h12l-3.86-5.14z"></path>
                    </svg>
                    <span className="iconTab">Images</span>
                </div>
            </div>
            <div data-node-key="video" className="ant-tabs-tab" onClick={() => changeBackroud('video')} id='video'>
                <div className="ant-tabs-tab-btn">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="m10 11-.94 2.06L7 14l2.06.94L10 17l.94-2.06L13 14l-2.06-.94zm8.01-7 2 4h-3l-2-4h-2l2 4h-3l-2-4h-2l2 4h-3l-2-4h-1c-1.1 0-1.99.9-1.99 2l-.01 12c0 1.1.9 2 2 2h16c1.1 0 1.99-.9 1.99-2V4h-3.99zm2 14h-16V6.47L5.77 10H16l-.63 1.37L14 12l1.37.63L16 14l.63-1.37L18 12l-1.37-.63L16 10h4.01v8z"></path>
                    </svg>
                    <span className="iconTab">Videos</span>
                </div>
            </div>
            <div data-node-key="news" className="ant-tabs-tab" onClick={() => changeBackroud('news')} id='news'>
                <div className="ant-tabs-tab-btn">                    
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M16 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V8l-5-5zm3 16H5V5h10v4h4v10zM7 17h10v-2H7v2zm5-10H7v2h5V7zm-5 6h10v-2H7v2z"></path>
                    </svg>
                    <span className="iconTab">News</span>
                </div>
            </div>
        </div>
    </div>  
    );
};

export default UnderHeader;