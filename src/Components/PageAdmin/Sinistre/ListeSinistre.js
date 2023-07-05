import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import SinistreService from '../../../services/AdminService/SinistreService'
import 'bootstrap/dist/css/bootstrap.min.css';
import './listSinistre.css'
import { makeStyles } from '@material-ui/core/styles';
import { Table } from '@material-ui/core';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 80,
    },
    thead: {
        minWidth: 90,
    },
    action: {
        minWidth: 196,
    },
});

const ListeSinistre = () => {

    const [sinistres, setSinistres] = useState([])
    const [numberOfPages, setNumberOfPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/sinistres?page=${pageNumber}&size=5`)
          .then((response) => response.json())
          .then(({ totalPages, sinistres }) => {
            setSinistres(sinistres);
            setNumberOfPages(totalPages+1);
          });
      }, [pageNumber]);


    const deleteSinistre = (sinistreId) => {
        SinistreService.deleteSinistre(sinistreId).then(res => {
            this.setState({ sinistres: this.state.sinistres.filter(sinistre => sinistre.sinistreId !== sinistreId) });
        });
    }

    const gotoNext = () => {
        setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
      };

    
    const gotoPrevious = () => {
        setPageNumber(Math.max(0, pageNumber - 1));
      };

    const classes = useStyles();
    return (
        <div className='main__container'>
            <h2 className="main__title"> Tous Les sinistres </h2>
            <Link to="/add-sinistre" className="btn btn-primary mb-2" > Ajouter Un Sinistre </Link>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead className={classes.table}>
                        <TableRow className={classes.table}>
                            <TableCell className={classes.table}><h6> Numéro ce sinistre </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Date se survenance </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Etat </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Lieu</h6></TableCell>
                            <TableCell className={classes.thead}><h6> Date de déclaration </h6></TableCell>
                            <TableCell className={classes.thead}><h6> Type de contrat </h6></TableCell>
                            <TableCell className={classes.action}><h6> Actions </h6></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            sinistres.map(
                                sinistre =>
                                    <TableRow key={sinistre.idS}>
                                        <TableCell> {sinistre.idS} </TableCell>
                                        <TableCell> {sinistre.dateSurvenance} </TableCell>
                                        <TableCell> {sinistre.etat} </TableCell>
                                        <TableCell> {sinistre.lieu} </TableCell>
                                        <TableCell> {sinistre.dateDeclaration} </TableCell>
                                        <TableCell> {sinistre.type} </TableCell>

                                        <TableCell>
                                            <Link className="btn btn-info" to={`/edit-sinistre/${sinistre.idS}`} >Update</Link>
                                            <button className="btn btn-danger" onClick={() => deleteSinistre(sinistre.idS)}
                                                style={{ marginLeft: "10px" }}> Delete</button>
                                        </TableCell>
                                    </TableRow>
                            )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <button onClick={gotoPrevious}>Previous</button>
              {pages.map((pageIndex) => (
             <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
             {pageIndex + 1}
             </button>
                         ))}
            <button onClick={gotoNext}>Next</button>
        </div>
    )
}

export default ListeSinistre;