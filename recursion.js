//Найти количество подчинённых у сотрудника (включая его самого)
//Другими словами: глубину вложенности объекта
const employee = {
  rank: "admin",
  id: 1,
  employee: {
    rank: "manager",
    id: 2,
    employee: {
      rank: "viewer",
      id: 3,
      employee: null,
    },
  },
};

// //Найти количество подчинённых у сотрудника (включая его самого)
// //Другими словами: глубину вложенности объекта.
// //У одного сотрудника может быть несколько подчинённых
const employee2 = {
  rank: "admin",
  id: 1,
  employees: [
    {
      rank: "manager",
      id: 2,
      employees: [
        {
          rank: "viewer",
          id: 4,
          employees: [],
        },
        {
          rank: "viewer",
          id: 5,
          employees: [],
        },
      ],
    },
    {
      rank: "manager",
      id: 3,
      employees: [],
    },
  ],
};
