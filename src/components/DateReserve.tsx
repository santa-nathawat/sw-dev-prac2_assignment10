"use client";

import { FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateReserve() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="grid gap-6">
        <DatePicker
          label="Event date"
          slotProps={{
            textField: {
              fullWidth: true,
              name: "Event-Date",
              variant: "standard",
            },
          }}
        />
        <TextField fullWidth label="Name-Lastname" name="Name-Lastname" required variant="standard" />
        <TextField fullWidth label="Contact-Number" name="Contact-Number" required variant="standard" />
        <FormControl fullWidth required variant="standard">
          <InputLabel id="venue-label">Venue</InputLabel>
          <Select id="venue" label="Venue" labelId="venue-label" name="venue" defaultValue="">
            <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
            <MenuItem value="Spark">Spark Space</MenuItem>
            <MenuItem value="GrandTable">The Grand Table</MenuItem>
          </Select>
        </FormControl>
      </div>
    </LocalizationProvider>
  );
}
