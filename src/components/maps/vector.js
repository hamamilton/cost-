import React from 'react';
import { MDBContainer } from 'mdbreact';
import { VectorMap } from 'react-jvectormap';

const Vector = () => {
  const series = {
    regions: [{
      values: {
          IN:'#5478ab',
          DK:'#88b7d6',
          PL:'#5478ab',
          IQ:'#98c6e5',
          PK:'#88b7d6',
          RU:'#95c9ed',
          CN:'#add8f5',
          AU:'#5478ab',
          AR:'#b6d4e9',
          FR:'#9ccbeb',
          NG:'#98c6e5',
          CA:'#5478ab',
          US:'#9ccbeb'
      }
    }]
  }

  const regionStyle ={
    initial: {
      fill: '#cbced4'
    }
  }
  
  return (
      <MDBContainer fluid>
        <div style={{width: '100%', height: 500}}>
          <VectorMap map={'world_mill'}
                      backgroundColor="#EEEEEE"
                      containerStyle={{
                          width: '100%',
                          height: '100%'
                      }}
                      containerClassName="map"
                      series={series}
                      regionStyle={regionStyle}
          />
        </div>
      </MDBContainer>
  );
}

export default Vector;