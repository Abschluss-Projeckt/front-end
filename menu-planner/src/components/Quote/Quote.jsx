import React from "react";
import "./Quote.scss";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
function Quote() {
  return (
    <div className="quote">
      <p className="q-text">
        <span>
          <FormatQuoteIcon style={{ fontSize: "35px" }} />
        </span>
        Food, in the end, in our own tradition, is something holy. It's not
        about nutrients and calories. It's about sharing. It's about honesty.
        It's about identity.
      </p>
      <p className="written-by">Louise Fresco</p>
    </div>
  );
}

export default Quote;
