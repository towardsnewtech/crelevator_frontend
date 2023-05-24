import React,{ useEffect, useState } from 'react' ;

// Core viewer
import { Viewer, Worker } from '@react-pdf-viewer/core';
import pdfjsWorker from "pdfjs-dist/build/pdf.worker.entry";

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';

import {
    Box,
    Avatar,
    Typography
} from '@mui/material' ;

import FullscreenIcon from '@mui/icons-material/Fullscreen';

import { makeStyles } from '@mui/styles';
import PdfFullScreen from './PdfFullScreen';
import useWindowSize  from '../../pages/common';

const useStyles = makeStyles((theme) => ({
    root : {
        display : 'flex',
        justifyContent : 'center',
        alignItems : 'center',

        borderRadius : '10px !important',

        // width : props => props.width ,
        // height : props => props.height + 'px !important',
        height: '500px',
        boxSizing : 'border-box',

        padding : 5,
        border: '2px solid #b32923',

        position : 'absolute',

        "& .rpv-core__inner-page" : {
            height : props => props.height + 'px !important',
            position: 'relative',
            zIndex: 0
        },
        "& .MuiSvgIcon-root" : {
            marginRight : 10
        },
        "& .MuiTypography-root": {
            color : '#b32923',
            fontSize: '16px',
            textTransform: 'uppercase'
        },
        '& svg': {
            position :'absolute',
            top: 10,
            right: 20,
            zIndex: 1,
            fontSize: 32,
            '&:hover': {
                cursor: 'pointer'
            }
        }
    }
})) ;

const PdfPreview = (props) => {

    // npm install pdfjs-dist@2.6.347
    // npm install react-pdf-viewer@3.1.2

    const classes = useStyles(props) ;

    const {
        previewUrl
    } = props ;

    const [open, setOpen] = React.useState(false) ;

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const size = useWindowSize() ;

    return (
        <>
        <Box className={classes.root} style={{ width: size.width > 580 ? '100%' : '94%'}}>
            
            {
                previewUrl ? 
                <Worker workerUrl={pdfjsWorker}>
                    <FullscreenIcon onClick={handleOpen} />
                    <Viewer
                        fileUrl={previewUrl}
                    />
                </Worker>
                : <>
                    <Typography>No Preview</Typography>
                </>
            }
        </Box>
        <PdfFullScreen open={open} handleClose={handleClose} previewUrl={previewUrl} />

        </>
    )
}

export default PdfPreview ;