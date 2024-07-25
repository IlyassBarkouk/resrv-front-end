import React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { Button } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const today = dayjs();
const tomorrow = dayjs().add(1, 'day');
const todayEndOfTheDay = today.endOf('day');

export default function Consultation() {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/list');
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoItem label="   ">
        <h3>S'il vous plait vous devez choisir la date et l'heure de votre réunion</h3>
        <DemoContainer
          components={[
            'DatePicker',
            'DateTimePicker',
            'TimePicker',
            'DateRangePicker',
            'DateTimeRangePicker',
          ]}
        >
          <DemoItem label="Date">
            <DatePicker defaultValue={tomorrow} views={['year', 'month', 'day']} />
          </DemoItem>
          <DemoItem label="Heure">
            <TimePicker defaultValue={todayEndOfTheDay} />
          </DemoItem>
          <DemoItem label="Nombre des membres">
            <div className="col-auto">
              <label className="visually-hidden" htmlFor="autoSizingSelect">Nombre des membres</label>
              <select className="form-select" id="autoSizingSelect">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
              </select>
            </div>
          </DemoItem>
          <Button variant="contained" onClick={handleNext}>Suivant</Button>
        </DemoContainer>
      </DemoItem>
    </LocalizationProvider>
  );
}
