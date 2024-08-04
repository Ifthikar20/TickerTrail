// import React, { useState, useEffect } from "react";
// import { Box, Typography, Link, IconButton } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import { useGetNewsQuery, usePostKpiMutation, useGetKpisQuery } from "../state/api";
// import SearchComponent from "../../components/ui/SearchComponent"; // Adjusted import path


// type Props = {};

// const Row1 = (props: Props) => {
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [ticker, setTicker] = useState("");
//   // const {data1} = useGetKpisQuery();
//   const { data, error, isLoading } = useGetNewsQuery(ticker, { skip: !ticker });
//   const [postKpi] = usePostKpiMutation();

//   const handleSearch = (term) => {
//     setTicker(term);
//   };

//   useEffect(() => {
//     if (data && data.feed.length > 0) {
//       const foundItem = data.feed.find(item =>
//         item.ticker_sentiment.some(tickerObj => tickerObj.ticker === ticker)
//       );
//       setSelectedItem(foundItem);
//     }
//   }, [data, ticker]);


// //Below logic is to add it to DB
//   const handleAddKpi = async () => {
//     if (!selectedItem) {
//       alert("No item selected");
//       return;
//     }

//     const newKpi = {
//       title: selectedItem.title,
//       relevanceScore: Math.max(
//         ...selectedItem.topics.map((topic) => parseFloat(topic.relevance_score))
//       ),
//       tickers: selectedItem.ticker_sentiment.map((tickerObj) => tickerObj.ticker),
//       url: selectedItem.url,
//     };

//     try {
//       await postKpi(newKpi).unwrap();
//       alert("KPI added successfully");
//     } catch (error) {
//       console.error("Failed to post KPI", error);
//       alert("Error adding KPI");
//     }
//   };

//   return (
//     <>
//     <br/>
//       <SearchComponent onSearch={handleSearch} />
//      <br />
 
//       <Box
//         borderRadius="1rem"
//         boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)"
//         bgcolor="#FFFF"
//         gridArea="a"
//         padding="1rem"
//         fontSize="0.875rem"
//         height="400px" // Adjust height as needed
//         width="auto" // Adjust width as needed
//         overflow="auto"
//       >
//         <IconButton
//           style={{ position: "relative", top: '0.5rem', right: '0.5rem', color: '#1976d2' }}
//           onClick={handleAddKpi}
//         >
//           <AddIcon style={{ color: '#1976d2' }} />
//         </IconButton>
//         {isLoading && <p>Loading...</p>}
//         {error && <p>Error loading data</p>}
//         {data && data.feed.length === 0 && <p>No data available</p>}
//         {data && data.feed.length > 0 && data.feed.map((item, index) => (
//           <div
//             key={index}
//             style={{ padding: "0.5rem 0", borderBottom: "1px solid #ddd" }}
//           >
//             <h2 style={{ fontSize: "1rem", margin: "0 0 0.5rem 0" }}>
//               {item.title}
//             </h2>
//             <p style={{ margin: "0 0 0.5rem 0" }}>
//               Relevance Score:{" "}
//               {Math.max(
//                 ...item.topics.map((topic) => parseFloat(topic.relevance_score))
//               )}
//             </p>
//             <div>
//               <strong>Tickers:</strong>
//               <ul style={{ padding: "0", margin: "0", listStyleType: "none" }}>
//                 {item.ticker_sentiment.map((tickerObj, idx) => (
//                   <li key={idx} style={{ fontSize: "0.875rem" }}>
//                     {tickerObj.ticker}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//             <a
//               href={item.url}
//               target="_blank"
//               rel="noopener noreferrer"
//               style={{
//                 fontSize: "0.875rem",
//                 color: "blue",
//                 textDecoration: "underline",
//               }}
//             >
//               Read more
//             </a>
//           </div>
//         ))}
//       </Box>
//       <Box
//         borderRadius="1rem"
//         boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)"
//         bgcolor="#FFFF"
//         gridArea="b"
//       >
//       </Box>
//       <Box
//         borderRadius="1rem"
//         boxShadow="0.15rem 0.2rem 0.15rem 0.1rem rgba(0,0,0,.1)"
//         bgcolor="#FFFF"
//         gridArea="c"
//       ></Box>
//     </>
//   );
// };

// export default Row1;
