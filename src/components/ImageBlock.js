import React from 'react';
import '../components/ImageBlock.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function ImageBlock(props) {
    return (
        <div className='size-33'>
            <FontAwesomeIcon className="image-block-img" icon={props.imgSrc} />
            <div className="image-block-content">
                <h6 className="image-block-title">{props.title}</h6>
                <p className="image-block-desc">{props.description}</p>
            </div>
        </div>
    );
}

export default ImageBlock;