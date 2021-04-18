import React from "react";

interface Props {
  name: string;
}

const DividerLine: React.FC<Props> = ({ name }) => {
  return (
    <>
      <div className="underLine"></div>
      <style jsx>{`
        .underLine {
          height: 15px;
          width: 100%;
          border-bottom: solid 2px #000;
          text-align: center;
          margin: 2em 0;
        }
        .underLine::after {
          content: "${name}";
          background: #fff;
          position: relative;
          top: 0;
          padding: 0 20px;
          line-height: 30px;
        }
      `}</style>
    </>
  );
};

export default DividerLine;
