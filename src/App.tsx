import { ThemeProvider } from "styled-components";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { queryClient } from "./api/queryClient";
import Router from "./routes/index";
import theme from "./styles/theme";
import GlobalStyle from "./styles/GlobalStyle";

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <button onClick={() => toast("클릭")}>클릭</button>
        <ToastContainer
          position='top-center'
          limit={1}
          autoClose={2000}
          hideProgressBar
        />
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
