import React from 'react'
import styled from 'styled-components';
import InteriorFour from '../images/InteriorFour.jpg'





const Section = styled.section`
width: 100%;
height: 100%;
padding: 4rem 0rem;
`;

const Container = styled.div`
padding: 3rem calc((100vw - 1300px) / 2);
display: grid;
grid-teplate-colums: 1fr 1fr;
gridn-template-rows: 800px;

@media screen and (max-width: 768px) {
    grid-template-colums: 1fr;
}
`;

const ColumnLeft = styled.div`
color: #10595E;
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
line-height: 1.4;
padding: 1rem 2rem;

h1 {
    font-decoration: bold;
    margin-bottom: 1rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
}

p {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}

li {
    margin-bottom: 2rem;
}
`;

const BackgroungImg = styled.img`

`;

const AboutInfo = () => {
    return (

        <Section>
            <Container>
                <ColumnLeft>
                    <h1>About Us</h1>
                    <p> 
                        <ul>
                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </li>
                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </li>
                            <li> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  </li>
                            
                        </ul>
                    </p>
                </ColumnLeft>
            </Container>
        </Section>

    )
}

export default AboutInfo
