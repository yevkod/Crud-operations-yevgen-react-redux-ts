import React from 'react';
import './App.css';
import {Main} from "./Components/Main/Main";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {UserList} from "./User/UserList";
import {UserForm} from "./User/UserForm";

export const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<UserList/>}/>
                    <Route path="/add" element={<UserForm/>}/>
                    <Route path="/edit/:id" element={<UserForm isEditForm={true}/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}