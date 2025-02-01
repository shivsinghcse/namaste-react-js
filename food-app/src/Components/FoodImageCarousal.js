import { CDN_URL } from '../../utils/constants';

function FoodImageCarousal(props) {
    // console.log(props.resData.imageId);

    const { text } = props?.resData?.action;
    const { imageId } = props?.resData;
    // console.log(text);

    return (
        <>
            {/* <div
                className="carousal"
                style={{
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    // border: '5px solid red',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'

                }}
            > */}
                <div className="carousal-img">
                    <img
                        style={{
                            width: '150px',
                            // height: '150px',
                            // padding: '1rem',
                            // border: '5px solid green',
                        }}
                        className="carousal-item-img"
                        src={CDN_URL + imageId}
                    />
                </div>
            {/* </div> */}
        </>
    );
}

export default FoodImageCarousal;

/**
 *  <div
                className="carousal-card"
                style={{
                    border: '2px solid #000',
                    // width: '100%',
                    display: 'flex',
                    backgroundColor: 'green',
                }}
            >

            <div className="carousal-details">
                    <p className="carousal-item-name">{text}</p>
                </div> 
 * 
 */
