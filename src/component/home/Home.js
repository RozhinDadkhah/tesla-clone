import React from 'react'
import styled from 'styled-components';
import Section from '../section/Section';
import Accessory from '../../images/accessories.jpg'

function Home(props) {
    return (
        <Container>
            <Section
                title='Model S'
                description='order Online Touckless Delivery'
                backgroundImg='../../images/model-s.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model Y'
                description='order Online Touckless Delivery'
                backgroundImg='../../images/model-y.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'

            />
            <Section
                title='Model 3'
                description='order Online Touckless Delivery'
                backgroundImg='../../images/model-3.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Model X'
                description='order Online Touckless Delivery'
                backgroundImg='../../images/model-x.jpg'
                leftBtnText='Custom order'
                rightBtnText='Existing Inventory'
            />
            <Section
                title='Lowest Cost Solar Panels in America'
                description='Money-back guarantee'
                backgroundImg='../../images/solar-panel.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Solar for new Roofs'
                description='Solar Roof Costs Less Than New Roof'
                backgroundImg='../../images/solar-roof.jpg'
                leftBtnText='Order now'
                rightBtnText='Learn more'
            />
            <Section
                title='Accessories'
                description=''
                backgroundImg={Accessory}
                leftBtnText='Show now'
            />

        </Container>
    )
}

export default Home

const Container = styled.div`
    height : 100vh;
    z-index : 10;
`