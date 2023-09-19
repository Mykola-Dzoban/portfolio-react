import { createClient } from "contentful";
import { useState } from "react";
import { useEffect } from "react";

const client = createClient({
  space: "w7k2e97toewo",
  environment: "master",
  accessToken: "XWtVJyxRAAMHGRMpitZ-vV4dHmp8E_47rpF5io8wEEA",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  const getData = async () => {
    try {
      const resp = await client.getEntries({
        content_type: "portfolioProjects",
      });
      const projects = resp.items.map((item) => {
        const {
          id,
          title,
          descriptionGb,
          descriptionUa,
          githubLink,
          pageLink,
          stack,
        } = item.fields;

        const photosArr = item.fields.photos.map((itemPhoto) => {
          const { url } = itemPhoto?.fields?.file;
          return url;
        });

        return {
          id,
          title,
          descriptionGb,
          descriptionUa,
          githubLink,
          pageLink,
          stack,
          photos:photosArr
        };
      });
      setProjects(projects);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;
