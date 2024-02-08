function Layout({ children, hero }) {
  return (
    <div className="bg-[#F8FFB3]">
      {hero}
      <div className="h-fit px-[105px] py-[110px] flex gap-10 justify-center">
        {children}
      </div>
    </div>
  );
}

export default Layout;
