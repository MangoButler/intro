import Header from "../components/Header";

function BlogLayout({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}

export default BlogLayout;
