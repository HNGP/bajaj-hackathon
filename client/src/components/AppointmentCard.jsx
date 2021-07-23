import React from 'react'
import { Card} from 'antd';
import '../../src/App.css';

const { Meta } = Card;
export const AppointmentCard = (props) => {
    const {name,specialist,rating,imageurl}=props
    return (
          <Card className='card'
            cover={<img src={imageurl} alt='hazelpinto' width="180px" height="200px"/>}>
        <Meta title={name} description={specialist} />
  </Card>
    );
}
