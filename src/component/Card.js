import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Card() {
    let [title, setTitle] = useState(['내돈내산 리뷰(광고x)', '대만드라마 추천', '홍대 나들이', '여름 필수템 추천']);
    let [날짜, 날짜바꾸기] = useState(['24/06/14', '24/06/16', '24/06/18', '24/06/20']);

    return (
        <Container>
            <div className="SortBtn">
                <button onClick={() => {
                    let copy = [...title];
                    copy.sort();
                    setTitle(copy);
                }}>글 정렬하기</button>
            </div>
            <Row>
                {
                    title.map((a, i) => {
                        return (
                            <Col sm={6} key={i}>
                                <div className="card">
                                    <img src={process.env.PUBLIC_URL + '/photo' + (i + 1) + '.jpg'} width='100%' />
                                    <p>{title[i]}</p>
                                    <span>{날짜[i]}</span>
                                </div>
                            </Col>
                        );
                    })
                }
            </Row>
        </Container>
    );
}

export default Card;
