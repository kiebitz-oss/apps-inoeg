// Kiebitz - Privacy-Friendly Appointments
// Copyright (C) 2021-2021 The Kiebitz Authors
// README.md contains license information.

import { Layout } from 'apps/common/Layout';
import React from 'react';
import { Route, Routes } from 'react-router';
import { Nav } from './common/Nav';
import FinderPage from './finder';
import { StatusPage } from './StatusPage';
import WelcomePage from './WelcomePage';

export default function UserApp() {
    return (
        <Layout nav={Nav}>
            <Routes>
                <Route path="/finder">
                    <Route path=":step" element={<FinderPage />} />
                    <Route index element={<FinderPage />} />
                </Route>
                <Route path="/status" element={<StatusPage />} />
                <Route index element={<WelcomePage />} />
            </Routes>
        </Layout>
    );
}
