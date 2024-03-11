type ContainerProps = {
  children: JSX.Element;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="w-[400px] rounded-lg border-2 border-green-600 bg-green-200 p-4 pt-8 md:w-[600px]">
      {children}
    </div>
  );
}

export default Container;
