import React from "react";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media, Modal, ModalHeader, ModalBody, FormGroup, Label, Form, ModalFooter, Button } from "reactstrap";
import Datatable from 'react-data-table-component';
import { getNews } from "../../action/extras";
import { SubTitle } from "../common";

const News = () => {
	const [videos, setVideos] = React.useState();
	const [col, setCol] = React.useState();
	const [selectedNews, setSelectedNews] = React.useState();
	const [open, setOpen] = React.useState(false);

	const handleOpen = (item) => {
		setOpen(true);
		setSelectedNews(item);
	}

	const handleClose = () => {
		setOpen(false);
	}

	React.useEffect(() => {
		getNews().then(res => {
			let temp = [];
			res.news.map((item, index) => {
				temp.push({
					id: index + 1,
					title: item.title,
					content: item.content,
					option: <p onClick={() => handleOpen(item)} style={{  cursor: 'pointer' }}>read more...</p>
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
						textAlign: "center",
						width : '100px'
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
			<CommonLayout parent="home" title="News">
				<section className="about-page section-b-space">
					<Container>
						<Row>
							<Col sm="12">
								<SubTitle style={{ borderBottom: '1px solid #ddd', marginBottom: '30px' }}>
									News
								</SubTitle >
							</Col>
							<Col sm="12">
								<Datatable
									data={videos}
									pageSize={5}
									pagination={true}
									className="-striped -highlight"
									columns={col}
									striped={true}
									center={true}
								/>
							</Col>
						</Row>
					</Container>
				</section>
			</CommonLayout>
			<Modal isOpen={open} toggle={handleClose} style={{ marginTop: '100px' }}>
				<ModalHeader>
					<SubTitle
						className="modal-title f-w-600"
						id="exampleModalLabel2"
					>
						{selectedNews?.title}
					</SubTitle>
				</ModalHeader>
				<ModalBody>
					<div
						style={{
							padding: '20px',
							fontSize:'16px'
						}}
					>
						{selectedNews?.content}
					</div>
				</ModalBody>
				<ModalFooter>
					<Button
						type="button"
						color="secondary"
						onClick={handleClose}
					>
						Close
					</Button>
				</ModalFooter>
			</Modal>
		</>
	);
};

export default News;
