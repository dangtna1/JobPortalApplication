export const fetchJobList = async () => {
  try {
    const res = await fetch("api/job/");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchJob = async ({ keyword, salary }) => {
  try {
    const res = await fetch(
      `api/job/search?keyword=${keyword}&salary=${salary}`
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export const searchCompany = async ({ keyword, salary }) => {
  //   console.log(
  //     `/api/company/search-by-salary?keyword=${keyword}&salary=${salary}`
  //   );
  try {
    const res = await fetch(
      `/api/company/search-by-salary?keyword=${keyword}&salary=${salary}`
    );

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
