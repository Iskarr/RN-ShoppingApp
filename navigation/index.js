import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardImgOverlay,
  Button
} from "reactstrap";

import {
  FaPhone,
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaShoppingBag,
  FaCarSide,
  FaCar,
  FaTruck
} from "react-icons/fa";

const tvserver = "https://tv.9st.one/tvo";

export default class BusinessCardBack extends React.Component {
  // <CardText><i>Famous for {item.famous}</i></CardText>
  render() {
    const item = this.props.item;

    let orderMethodButtons = [];
    let distributionMethods = [];

    if (!!item.orderMethod) {
      if (!!item.orderMethod.phone) {
        orderMethodButtons.push(
          <Button
            color="success"
            href={"tel: " + item.orderMethod.phone}
            style={{ borderRadius: "50%", margin: "0.3rem" }}
          >
            <FaPhone
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.web) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.web}
            style={{ borderRadius: "50%", margin: "0.3rem" }}
          >
            <FaMobileAlt
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.ios) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.ios}
            style={{ borderRadius: "50%", margin: "0.3rem" }}
          >
            <FaApple
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
      if (!!item.orderMethod.android) {
        orderMethodButtons.push(
          <Button
            color="primary"
            href={item.orderMethod.android}
            style={{ borderRadius: "50%", margin: "0.3rem" }}
          >
            <FaAndroid
              style={{ minWidth: "30px", height: "42px", margin: "0.1rem" }}
            />
          </Button>
        );
      }
    }

    if (!!item.distribution) {
      if (!!item.distribution.takeout) {
        // distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
        distributionMethods.push(
          <FaShoppingBag
            style={{ minWidth: "30px", height: "42px", margin: "0.3rem" }}
          />
        );
      }
      if (!!item.distribution.drivethru) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}></Button>)
        distributionMethods.push(
          <FaCarSide
            style={{ minWidth: "30px", height: "42px", margin: "0.3rem" }}
          />
        );
      }
      if (!!item.distribution.curbside) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaCar style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
        distributionMethods.push(
          <FaCar
            style={{ minWidth: "30px", height: "42px", margin: "0.3rem" }}
          />
        );
      }
      if (!!item.distribution.delivery) {
        //distributionMethods.push(<Button color="info"  style={{borderRadius: '10%', margin: '0.3rem'}}><FaTruck style={{ minWidth: '20px', height: '32px', margin: '0.05rem'}}/></Button>)
        distributionMethods.push(
          <FaTruck
            style={{ minWidth: "30px", height: "42px", margin: "0.3rem" }}
          />
        );
      }
    }

    //
    function foodTypeBG(type) {
      switch (type) {
        case "American":
          return "#3498DB";
        case "Chinese":
          return "#F4d03f";
        case "Mexican":
          return "#D35400";
        case "Pizza":
          return "#A93226";
        case "Drinks":
          return "#9b59b6";
        case "Fast food":
          return "#8B4513";
        case "Sandwiches":
          return "#27ae60";
        default:
          return "#5D6d7e";
      }
    }

    function cityToZip(city) {
      switch (city) {
        case "Tooele":
          return "84074";
        case "Erda":
          return "84074";
        case "Stansbury":
          return "84074";
        case "Stansbury Park":
          return "84074";
        case "Lake Point":
          return "84074";
        case "Grantsville":
          return "84029";
        default:
          return "UNKNOWN ZIP";
      }
    }

    // var uri = "my test.asp?name=ståle&car=saab";
    // var res = encodeURI(uri);

    function googleAddress(item) {
      let tempStr = `${item.street}, ${item.city}, ${item.state} ${cityToZip(
        item.city
      )}`;
      return encodeURI(tempStr);
    }

    return (
      <Card
        style={{
          minWidth: "25vw",
          maxWidth: "100%",
          border: "1pt solid black",
          margin: "1rem",
          padding: "1rem",
          boxShadow: "0.3rem 0.3rem 0.8rem rgba(0,0,0,0.3)",
          backgroundColor: foodTypeBG(item.type)
        }}
      >
        <CardImg
          top
          width="100%"
          style={{ objectFit: "cover" }}
          src={tvserver + "/images/" + item.img}
          alt={item.name}
        />

        <CardBody style={{ textAlign: "center", padding: "0.5rem" }}>
          <CardTitle
            style={{
              fontSize: "1.15rem",
              fontWeight: 500,
              textAlign: "center"
            }}
          >
            {item.name}
          </CardTitle>
          {/* <CardSubtitle className="text-muted" style={{textAlign: "center", fontSize: '0.8rem', padding: '0rem'}}>{item.type} </CardSubtitle> */}
          <hr style={{ padding: "0rem", margin: "0.4rem" }} />

          <a
            href={"http://maps.google.com/maps?q=" + googleAddress(item)}
            style={{ display: "block" }}
          >
            {item.street}
            <br />
            {item.city}, {item.state} &nbsp;{cityToZip(item.city)}
          </a>
          {distributionMethods}
          <br />
          <br />
          {orderMethodButtons}
        </CardBody>
      </Card>
    );
  }
}
