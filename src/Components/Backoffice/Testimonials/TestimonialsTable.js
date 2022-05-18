import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Get, Delete } from '../../../Services/privateApiService';
import './TestimonialsTable.css'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Button from '@mui/material/Button';

const endpoint = process.env.REACT_APP_BASE_URL + process.env.REACT_APP_TESTIMONIALS

const TestimonialsTable = () => {
  const [testimonialsData, setTestimonialsData] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState('');

  

  const deleteTestimonial = async () => {
    const res = await Delete(endpoint +'/' + selectedMember.id)
    if(res.data.success){
      fetchTestimonialsData();
    }
  }

  const fetchTestimonialsData = async () => {
      const res = await Get (endpoint + "?limit=20");
      const { data } = res.data;
      setTestimonialsData(data); 
  };

  useEffect(() => {
    fetchTestimonialsData();
  }, []);

  const handleClickOpen = (user) => {
    setSelectedMember(user);
    setOpen(true);
  };

  const handleClose = () => {
    setSelectedMember('');
    setOpen(false);
  };

  return (
    <div className='testimonials-table-container'>
        <table className='testimonials-table' >
          <thead>
            <tr className='testimonials-table-header'>
                <th className='testimonial-th'>Nombre</th>
                <th className='testimonial-th'>Descripcion</th>
                <th className='testimonial-th'>Foto</th>
                <th className='testimonial-th'>Opciones</th>
            </tr>
          </thead>
          <tbody>
            {testimonialsData.map( (testimonial) =>{
                return(
                    <tr key={testimonial.id} className='testimonial-row-data'>
                        <td className='testimonial-text'>
                          {testimonial.name}
                        </td>

                        <td className='testimonial-text'>
                          {testimonial.description}
                        </td>

                        <td className='testimonial-text'>
                          <div className='testimonial-container-img'>
                            <img className='testimonial-img' alt={`${testimonial.name} avatar`} src={testimonial.image}/>
                          </div>
                        </td>

                        <td>
                            <Link to={`/backoffice/testimonials/edit/${testimonial.id}`}>
                              <button className='primary-backoffice-button'>
                                Editar
                              </button>
                            </Link> 
                        </td>

                        <td>
                            <button onClick={() => handleClickOpen(testimonial)} 
                                    className='secondary-backoffice-button'>
                              Borrar
                            </button>
                        </td>
                    </tr>
                )
            })}
          </tbody>
        </table>

        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent id="alert-dialog-title">
            <h2>¿Estas seguro de querer borrar al miembro {selectedMember.name} ?</h2>
          </DialogContent>
          <DialogActions>
            <Button variant="contained" onClick={handleClose}>Cancelar</Button>
            <Button variant="outlined" color="error" onClick={deleteTestimonial}>Borrar</Button>
          </DialogActions>
        </Dialog>
        
    </div>
  )
}

export default TestimonialsTable

