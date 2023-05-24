import React from "react";
import CommonLayout from "../../../components/shop/common-layout";
import { Container, Row, Col, Media } from "reactstrap";
import { getVideos } from "../../../action/extras";
import Datatable from 'react-data-table-component';
import { SubTitle } from "../../common";
import LiteYouTubeEmbed from 'react-lite-youtube-embed'
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import Loading from 'react-loading'
const TrainingVideos = () => {
  const [videos, setVideos] = React.useState(null);
  const [col, setCol] = React.useState();
  const getYoutubeId = (url) => {
    url = url.split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
    return (url[2] !== undefined) ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
  }

  React.useEffect(() => {
    getVideos().then(res => {
      let temp = [];
      console.log(res.videos)
      res.videos.map((video, index) => {
        temp.push({
          id: index + 1,
          name: video.name,
          youtubeId: getYoutubeId(video.videourl)
        })
      })
      const columns = [];

      for (const key in temp[0]) {
        let editable = renderEditable;
        if (key === "image") {
          editable = null;
        }
        if (key === "status") {
          editable = null;
        }
        if (key === "avtar") {
          editable = null;
        }
        if (key === "vendor") {
          editable = null;
        }
        if (key === "order_status") {
          editable = null;
        }

        columns.push({
          name: <b>{Capitalize(key.toString())}</b>,
          header: <b>{Capitalize(key.toString())}</b>,
          selector: row => row[key],
          Cell: editable,
          style: {
            width: '100px',
            textAlign: 'center'
          },
        });
      }

      setCol(columns);
      setVideos(temp);
    }).catch(err => {
      console.log(err)
    })
  }, [])

  const Capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

  const renderEditable = (cellInfo) => {
    return (
      <div
        style={{ backgroundColor: "#fafafa" }}
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => {
          data[cellInfo.index][cellInfo.index.id] = e.target.innerHTML;
          setData({ myData: data });
        }}
        dangerouslySetInnerHTML={{
          __html: myData[cellInfo.index][cellInfo.index.id],
        }}
      />
    );
  };

  return (
    <>
      <CommonLayout parent="home" title="Training Videos">
        <section className="about-page section-b-space">
          <Container>
            <Row> 
              <Col sm="12">
                <SubTitle style={{ borderBottom: '1px solid #ddd', marginBottom: '30px' }}>Traning Videos</SubTitle>
              </Col>
              
              {
                    videos ? videos?.map((video, index) => (
                        <Col sm="4" key={index}>
                          <div 
                            style={{
                              padding:'10px'
                            }}
                          >
                            <LiteYouTubeEmbed
                              id={video}
                              // iframeClass='h-60 w-full'
                              title='youtube video player'
                            />
                          </div>
                        </Col>

                    )) : <div style={{display:'flex', justifyContent:'center'}}>
                    <Loading type='spin' width={50} height={50} color="rgb(199, 32, 24)" />
                  </div>
                }
            </Row>
          </Container>
        </section>
      </CommonLayout>
    </>
  );
};

export default TrainingVideos;
