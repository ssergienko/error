import './Book.scss';
import React from "react";
import HTMLFlipBook from "react-pageflip";

function MyBook() {

  const turnPage = (pageFlipObj) => {
    let timer = setInterval(() => {
      if(pageFlipObj?.getPageFlip()) {
        pageFlipObj.getPageFlip().flipNext();
        pageFlipObj.getPageFlip().turnToPage(1);
      }
    }, 2000);
    return () => {
      clearInterval(timer);
    };
  }

  return (
    <HTMLFlipBook width={300} height={350} 
      size={'stretch'} 
      
      drawShadow={true} 
      flippingTime={1000}
      ref={(component) => turnPage(component)}>
      <div className="demoPage">sdfsdfsdf
        <div className="pageContent"><br/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/></div>
      </div>
      <div className="demoPage">sdfsdf
        <div className="pageContent"><br/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/></div>
      </div>
      <div className="demoPage">error
        <div className="pageContent"><br/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/></div>
      </div>
      <div className="demoPage">sdfsd
        <div className="pageContent"><br/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/><hr/><br/></div>
      </div>
    </HTMLFlipBook>
  );
}

export default MyBook;