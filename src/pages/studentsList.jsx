// StudentsTable.jsx
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../FirebaseConfig";

const StudentsTable = () => {
  const [students, setStudents] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState([
    "Sr No",
    "Full Name",
    "PRN",
    "Mobile No",
    "Email",
    "Department",
    "Year",
  ]);

  const allColumns = [
    { key: "Sr No", label: "Sr No" },
    { key: "fullname", label: "Full Name" },
    { key: "prnno", label: "PRN" },
    { key: "mobileno", label: "Mobile No" },
    { key: "email", label: "Email" },
    { key: "department", label: "Department" },
    { key: "yearofstudy", label: "Year" },
    { key: "githuburl", label: "GitHub" },
    { key: "linkedinurl", label: "LinkedIn" },
    { key: "motivation", label: "Motivation" },
  ];

  useEffect(() => {
    const fetchStudents = async () => {
      const studentsCollection = collection(db, "students");
      const studentSnapshot = await getDocs(studentsCollection);
      const studentList = studentSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setStudents(studentList);
    };
    fetchStudents();
  }, []);

  const filteredStudents = students.filter(student => {
    const matchesDepartment = departmentFilter ? student.department === departmentFilter : true;
    const matchesYear = yearFilter ? student.yearofstudy === yearFilter : true;
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = Object.values(student).some(value =>
      value?.toString().toLowerCase().includes(searchLower)
    );
    return matchesDepartment && matchesYear && matchesSearch;
  });

  const departments = [...new Set(students.map(s => s.department))];
  const years = [...new Set(students.map(s => s.yearofstudy))];

  const downloadCSV = (data, columns) => {
    if (!data || data.length === 0 || !columns || columns.length === 0) return;

    const csvRows = [
      columns.join(","), // header
      ...data.map((row, index) =>
        columns.map(col => {
          switch (col) {
            case "Sr No":
              return index + 1;
            case "Full Name":
              return row.fullname ?? "";
            case "PRN":
              return row.prnno ?? "";
            case "Mobile No":
              return row.mobileno ?? "";
            case "Email":
              return row.email ?? "";
            case "Department":
              return row.department ?? "";
            case "Year":
              return row.yearofstudy ?? "";
            case "GitHub":
              return row.githuburl ?? "";
            case "LinkedIn":
              return row.linkedinurl ?? "";
            case "Motivation":
              return row.motivation ?? "";
            default:
              return "";
          }
        }).join(",")
      )
    ];

    const csvString = csvRows.join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "students.csv";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const toggleColumn = (col) => {
    setSelectedColumns(prev =>
      prev.includes(col) ? prev.filter(c => c !== col) : [...prev, col]
    );
  };


  return (
    <div className="p-6 min-h-screen bg-black text-gray-200">
      <h2 className="text-5xl pt-15 font-bold pb-10  text-gray-100 text-center" style={{ fontFamily: '"Faculty Glyphic", sans-serif', fontWeight: 400, fontStyle: 'normal', background: "linear-gradient(90deg, #ff0057, #ff7e00)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Registered Students</h2>
      {/* Search, Filters & Download */}
      <div className="pb-8 pt-10 flex gap-5 px-[15vw] flex-wrap items-center">
        <input
          type="text"
          placeholder="Search....."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="rgba(0,0,0,0) border border-gray-900 text-gray-200 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 flex-1 placeholder-gray-400 transition"
        />
        <select
          value={departmentFilter}
          onChange={e => setDepartmentFilter(e.target.value)}
          className="bg-gray-950 pr-2 border border-gray-900 text-gray-200 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
        >
          <option value="">All Departments</option>
          {departments.map(dep => (
            <option key={dep} value={dep}>{dep}</option>
          ))}
        </select>
        <select
          value={yearFilter}
          onChange={e => setYearFilter(e.target.value)}
          className="bg-gray-950 border border-gray-900 text-gray-200 p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-600 transition"
        >
          <option value="">All Years</option>
          {years.map(year => (
            <option key={year} value={year}>{year}</option>
          ))}
        </select>

        <button
          onClick={() => setShowModal(true)}
          className="bg-gray-950 border border-gray-900 hover:bg-gray-900 text-gray-100 p-3 rounded-lg shadow transition"
        >
          Download CSV
        </button>
      </div>


      {/* Students Table */}
      <div className="overflow-x-auto rounded-[5px] shadow-lg bg-gray-970 border-none border-gray-900">
        <table className="min-w-full border-collapse border border-gray-900 table-fixed">
          <thead className="bg-gray-950 text-gray-100">
            <tr>
              {allColumns.map(header => (
                <th key={header.key} className="p-2 text-center font-semibold uppercase tracking-wider border border-gray-900">{header.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student, idx) => (
              <tr
                key={student.id}
                className={`transition cursor-pointer ${idx % 2 === 0 ? "bg-gray-950" : "bg-gray-850"} hover:bg-gray-800`}
              >
                <td className="p-2 border border-gray-900 text-center w-[4%]">{idx + 1}</td>
                <td className="p-2 border border-gray-900 w-[13%]">{student.fullname || "-"}</td>
                <td className="p-2 border border-gray-900 text-center w-[8%]">{student.prnno || "-"}</td>
                <td className="p-2 border border-gray-900 text-center w-[9%]">{student.mobileno || "-"}</td>
                <td className="p-2 border border-gray-900 w-[15%]">{student.email || "-"}</td>
                <td className="p-2 border border-gray-900 text-center w-[10%]">{student.department || "-"}</td>
                <td className="p-2 border border-gray-900 text-center w-[7%]">{student.yearofstudy || "-"}</td>
                <td className="p-2 border border-gray-900 text-center w-[7%]">
                  <a href={student.githuburl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">GitHub</a>
                </td>
                <td className="p-2 border border-gray-900 text-center w-[8%]">
                  <a href={student.linkedinurl} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:underline">LinkedIn</a>
                </td>
                <td className="p-2 border border-gray-900 align-top text-[0.8rem]">
                  <div className="w-full max-h-9 overflow-auto break-all custom-scrollbar text-gray-200">
                    {student.motivation || "-"}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filteredStudents.length === 0 && (
          <div className="p-6 text-center text-gray-400 font-medium">No students found.</div>
        )}
      </div>

      {/* Modal for column selection */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-between items-center z-50">
          <div className="bg-gray-950 p-6 rounded-lg w-96 text-gray-200">
            <h3 className="text-xl text-center pb-3 font-bold mb-4 text-gray-100">: &nbsp;Select Columns for CSV &nbsp;:</h3>
            <div className="grid grid-cols-2 gap-2 items-start justify-start max-h-64 overflow-auto pb-5">
              {allColumns.map(col => (
                <label key={col.key} className="flex items-center justify-between gap-2 cursor-pointer p-1 hover:bg-gray-700 rounded">
                  <input
                    type="checkbox"
                    checked={selectedColumns.includes(col.label)}
                    onChange={() => toggleColumn(col.label)}
                    className="w-4 h-4 accent-white"
                  />
                  <span className="text-gray-200">{col.label}</span>
                </label>
              ))}
            </div>
            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-800 hover:bg-gray-900 text-gray-100 px-4 py-2 rounded"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  downloadCSV(filteredStudents, selectedColumns);
                  setShowModal(false);
                }}
                className="bg-gray-800 hover:bg-gray-900 text-gray-100 px-4 py-2 rounded"
              >
                Download
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default StudentsTable;
