import { useRouter } from "next/router";
import React, { useState } from "react";
import { CreateStudentApi } from "../../service/students";
import { v4 as uuidv4 } from "uuid";

function ExcelTable({ getExcelData, students }) {
  const [excelData, setExcelData] = useState("");
  const [tableData, setTableData] = useState([]);
  const router = useRouter();
  const handleExcelDataChange = (e) => {
    setExcelData(e.target.value);
  };

  const handleCreateMany = async (e) => {
    const updatedTableData = [];
    for (const student of tableData) {
      try {
        const updatedStudentLoading = {
          ...student,
          Notloading: false,
        };
        updatedTableData.push(updatedStudentLoading);
        const createStudent = await CreateStudentApi({
          firstName: student.firstName,
          lastName: student.lastName,
          number: student.number,
          classroomId: router.query.classroomId,
        });

        const index = updatedTableData.findIndex((s) => s.id === student.id); // Find the index of the current student in the updatedTableData array
        const updatedStudentSuccess = {
          ...student,
          status: 200,
          Notloading: true,
        };
        updatedTableData.splice(index, 1, updatedStudentSuccess); // Replace

        students.refetch();
      } catch (err) {
        const index = updatedTableData.findIndex((s) => s.id === student.id); // Find the index of the current student in the updatedTableData array
        const updatedStudentSuccess = {
          ...student,
          status: 400,
          Notloading: true,
        };
        updatedTableData.splice(index, 1, updatedStudentSuccess); // Replace the current student with the updatedStudentSuccess object at the same index
      }
    }
    console.log(updatedTableData);
    getExcelData(updatedTableData);
  };

  const generateTable = () => {
    const rows = excelData.split("\n");

    const arrayOfObjects = rows.map((item) => {
      const [number, firstName, lastName] = item.split("\t");
      const uniqueId = uuidv4();
      return { id: uniqueId, number, firstName, lastName };
    });
    setTableData(arrayOfObjects);
    getExcelData(arrayOfObjects);
  };

  return (
    <div className="container mx-auto my-4">
      <div className="mb-4">
        <label htmlFor="excel_data" className="block font-bold mb-2">
          คัดลอคข้อมูลจาก Excel ลงที่นี่
        </label>
        <textarea
          id="excel_data"
          name="excel_data"
          className="w-96 h-96 p-2 border border-gray-300 rounded-md"
          value={excelData}
          onChange={handleExcelDataChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-4 w-full">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={generateTable}
        >
          Load students
        </button>
        <button
          onClick={handleCreateMany}
          className="bg-red-500 hover:bg-red-700 cursor-pointer text-white font-bold py-2 px-4 rounded"
        >
          Create students
        </button>
      </div>
    </div>
  );
}

export default ExcelTable;