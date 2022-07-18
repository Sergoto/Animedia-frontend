import { Add, Info, ThumbDown, ThumbUp } from '@mui/icons-material';
import React from 'react'
import "./listitem.scss"

function ListItem() {
  return (
    <div className="listItem">
      <img src="https://imgur.com/uQkeUDX.png" alt="" />
      <div className="itemInfo">
        <div className="icons">
          <Info className="icon" />
          <Add className="icon" />
          <ThumbUp className="icon" />
          <ThumbDown className="icon" />
        </div>
        <div className="details title">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          maxime, ex modi corrupti, omnis minus quibusdam sapiente odit fugit
          dolores rem fuga qui eos iste, ut earum voluptas placeat dicta!
        </div>
      </div>
    </div>
  );
}

export default ListItem