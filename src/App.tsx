// import DraggableCard from "./components/DraggableCard";
// import Loader from "./components/Loader";
// import ScrollIndicator from "./components/ScrollIndicator";

import Progress from "./components/Progress";

// import ScrollCarousel from "./components/ScrollCarousel";
// import Sidebar from "./components/Sidebar";

// import Caroulsel from "./components/Caroulsel";

const App = () => {
  return (
    <div>
      {/* <ScrollIndicator /> */}
      {/* <Loader /> */}
      {/* <div className="flex justify-center items-center h-[100vh] bg-[#f3f3f3]">
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
          }}
        >
          Card 1
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)",
          }}
        >
          Card 2
        </DraggableCard>
        <DraggableCard
          style={{
            background: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
          }}
        >
          Card 3
        </DraggableCard>
      </div> */}
      {/* <div className="flex justify-center items-center h-screen">
        <Caroulsel />
      </div> */}
      {/* <div className="flex justify-center items-center h-screen w-full bg-gray-950 text-white">
        <Sidebar />
      </div> */}

      {/* <div>
        <ScrollCarousel />
      </div> */}

      <div>
        <Progress />
      </div>
     
    </div>
  );
};

export default App;
