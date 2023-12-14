import { PageContainer } from '@ant-design/pro-components';
import { Alert, Card, Carousel, Image, Typography } from 'antd';
import React from 'react';
import { HeartTwoTone, SmileTwoTone } from '@ant-design/icons';

const Welcome: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    margin: '5px',
    color: '#fff',
    textAlign: 'center',
    width: '1080px',
    height: '764.1px',
  };
  return (
    <>
      <PageContainer>
        <Card>
          <Alert
            message={'打造最厉害的用户管理'}
            type="success"
            showIcon
            banner
            style={{
              margin: -12,
              marginBottom: 10,
            }}
          />
          <Typography.Title
            level={1}
            style={{
              textAlign: 'center',
            }}
          >
            <SmileTwoTone /> 用户中心管理 <HeartTwoTone twoToneColor="#eb2f96" />
          </Typography.Title>
        </Card>
        <Carousel autoplay autoplaySpeed={5000} style={contentStyle}>
          <div>
            <Image src="/HatsuneMiku/1.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/2.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/3.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/4.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/5.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/6.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/7.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/8.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/9.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/10.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/11.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/12.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/13.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/14.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/15.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/16.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/17.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/18.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/19.jpg"/>
          </div>
          <div>
            <Image src="/HatsuneMiku/20.jpg"/>
          </div>
        </Carousel>
      </PageContainer>
    </>
  );
};

export default Welcome;
