import * as React from "react";
import { useSearchParams } from "react-router-dom";

function App() {
  const [queryParam, setQueryParam] = useSearchParams();

  const value = queryParam.get('type')
  

  return (
    <div>
      giá trị: {queryParam}
    </div>
  );
}

export default App;