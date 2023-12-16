"use client"
import { useEffect, useState } from "react";
import React from "react";
import Header from "@/components/HomePageComponents/Header/Header";
import Form from "@/components/HomePageComponents/Form/Form";
export default function Home() {

  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://api.npoint.io/1958a580a3b24b8f779a');
      const newData = await response.json();
      setData(newData.hui);
      
    };
    fetchData();
  },[]);
  


  return (
  <React.Fragment>
    <Header></Header>
    <Form></Form>
  </React.Fragment>
  );
}


