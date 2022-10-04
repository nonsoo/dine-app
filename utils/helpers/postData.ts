const postData = async (route: string, body: any) => {
  const parsedBody = JSON.stringify(body);
  const response = await fetch(route, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: parsedBody,
  });

  const resParse = await response.json();

  return resParse;
};

export default postData;
