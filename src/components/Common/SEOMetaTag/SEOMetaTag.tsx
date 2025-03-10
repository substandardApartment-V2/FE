import { Helmet } from "react-helmet-async";

type TSEOMetaTag = {
  title?: string;
};

export default function SEOMetaTag(props: TSEOMetaTag) {
  return (
    <>
      <Helmet>
        <title>{`내 아파트는? ${props.title ? `- ${props.title}` : ""}`}</title>
      </Helmet>
    </>
  );
}
