import { Card, Col, Row, Button, Text  } from "@nextui-org/react";

export default function ProjectCard(props) {
  return (
    <Card css={{ mw: "320px", h: "500px" }}>
    <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
      <Col>
        <Text size={12}  transform="uppercase" color="#F072AC">
          {props.tech}
        </Text>
        <Text h3 color="#ffffffAA" >
          {props.name}
        </Text>
      </Col>
    </Card.Header>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={props.image}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Text color="white" size={12}>
            Available soon.
          </Text>
          <Text color="white" size={12}>
            Get notified.
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Button flat auto rounded color="error">
              <a href={props.url} target='_blank'> 
              <Text
                css={{ color: "inherit" }}
                size={12}
                weight="bold"
                
              >
                {`Go to ${props.name}`}
              </Text>
              </a>
            </Button>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
  );
}