import schoolsData from '../data/schools.json';
import invoicesData from '../data/invoices.json';
import collectionsData from '../data/collections.json';

// Mock functions to simulate API calls
export const getSchool = async (schoolId) => {
    return schoolsData.find((school) => school.id === schoolId);
};

export const getSchools = async () => {
  return schoolsData;
};

export const getInvoices = async (schoolId) => {
  return invoicesData.filter((invoice) => invoice.schoolId === schoolId);
};

// getUpcomingInvoices
export const getUpcomingInvoices = async (schoolId) => {
  return invoicesData
    .filter((invoice) => invoice.schoolId === schoolId && invoice.status === 'Incomplete')
    .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
};
console.log("invoicesData: ", getUpcomingInvoices(1));

export const getCollections = async (schoolId) => {
  return collectionsData.filter((collection) => collection.schoolId === schoolId);
};

export const createInvoice = async (invoiceData) => {
  const newInvoice = {
    id: Math.random().toString(36).substring(2, 9),
    ...invoiceData,
  };
  invoicesData.push(newInvoice);
  return newInvoice;
};

export const updateInvoice = async (invoiceId, invoiceData) => {
  const updatedInvoice = {
    ...invoicesData.find((invoice) => invoice.id === invoiceId),
    ...invoiceData,
  };
  const index = invoicesData.findIndex((invoice) => invoice.id === invoiceId);
  invoicesData[index] = updatedInvoice;
  return updatedInvoice;
};

export const deleteInvoice = async (invoiceId) => {
  const index = invoicesData.findIndex((invoice) => invoice.id === invoiceId);
  invoicesData.splice(index, 1);
};

export const updateCollection = async (collectionId, collectionData) => {
  const updatedCollection = {
    ...collectionsData.find((collection) => collection.id === collectionId),
    ...collectionData,
  };
  const index = collectionsData.findIndex((collection) => collection.id === collectionId);
  collectionsData[index] = updatedCollection;
  return updatedCollection;
};

export const getCollectionsCount = () => {
  return collectionsData.length;
};

export const getSignupsCount = () => {
  const signupCounts = {
    'Zeraki Analytics': 0,
    'Zeraki Finance': 0,
    'Zeraki Timetable': 0,
  };

  schoolsData.forEach((school) => {
    signupCounts[school.product]++;
  });

  return Object.values(signupCounts).reduce((a, b) => a + b, 0);
};

export const getTotalRevenue = () => {
  let totalRevenue = 0;
  invoicesData.forEach((invoice) => {
    totalRevenue += invoice.amount - invoice.paidAmount;
  });
  return totalRevenue;
};

export const getBouncedChequesCount = () => {
  return collectionsData.filter((collection) => collection.status === 'Bounced').length;
};

export const getTargetsData = () => {
  const targets = {
    'Zeraki Analytics': 500,
    'Zeraki Finance': 300,
    'Zeraki Timetable': 200,
  };

  const achieved = {
    'Zeraki Analytics': 0,
    'Zeraki Finance': 0,
    'Zeraki Timetable': 0,
  };

  schoolsData.forEach((school) => {
    achieved[school.product]++;
  });

  return Object.entries(targets).map(([name, target]) => ({
    name,
    value: achieved[name] / target,
  }));
};

export const getSignupsOverviewData = () => {
  const signupsOverview = {
    'Zeraki Analytics': { primary: 0, secondary: 0, igcse: 0 },
    'Zeraki Finance': { primary: 0, secondary: 0, igcse: 0 },
    'Zeraki Timetable': { primary: 0, secondary: 0, igcse: 0 },
  };

  schoolsData.forEach((school) => {
    const { product, type } = school;
    signupsOverview[product][type.toLowerCase()]++;
  });

  return Object.entries(signupsOverview).map(([name, { primary, secondary, igcse }]) => ({
    name,
    primary,
    secondary,
    igcse,
  }));
};
