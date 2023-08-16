package com.example.attendance.service;

import com.example.attendance.model.Attendance;
import com.example.attendance.repository.AttendanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public void saveAttendance(Attendance attendance) {
        // Implementation to save attendance using attendanceRepository
    }
}
