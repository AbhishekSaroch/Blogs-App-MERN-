import React, { useEffect, useState } from 'react';
import { apiConnector } from '../services/apiConnector';
import { endpoints } from '../services/apis';
import Blog from './Blog';
import Navbar from "../components/Navbar";
import Spinner from '../components/Spinner';
import { Link } from 'react-router-dom';

const { GET_USER_DETAILS } = endpoints;

const MyBlogs = () => {
    const userData = JSON.parse(localStorage.getItem("user"));
    const userId = userData?._id;

    const [blogs, setBlogs] = useState([]);
    const [userallDetails, setuseralldetails] = useState([]);
    const [loading, setloading] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            setloading(true)
            try {
                const userDetailsResponse = await apiConnector("GET", `${GET_USER_DETAILS}?userId=${userId}`);
                setBlogs(userDetailsResponse.data.data);
                setuseralldetails(userDetailsResponse.data.userAllDetails);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            setloading(false)
        };

        fetchData();
    }, [userId]);
    console.log("BLOGS",blogs)
    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar />
            <div className="max-w-4xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-4">{userallDetails.firstName}, Your Blogs Are Here</h1>
                {
                    loading ? (<Spinner />) : (blogs.length>0 ?(
                        <div>
                            {
                                blogs.map((blog,index)=>(
                                    <Blog key={index} blog={blog}/>
                                ))
                            }
                            
                        </div>
                    ) : (<div>{userallDetails.firstName} OOPS you don't have any blogs ,Please   
                    <Link to={"/createBlog"}>
                      Create Blogs
                    </Link>
                    </div>))
                }
            </div>
        </div>
    );
};

export default MyBlogs;
