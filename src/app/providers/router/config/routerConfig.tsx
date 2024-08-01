import React from 'react';

import { Route } from 'react-router-dom';

import { AuthForm } from 'pages/AuthPage';
import { ClientsPage } from 'pages/CrmSystem/ClientsPage';
import { SegmentsPage as CRMSegmentsPage } from 'pages/CrmSystem/SegmentsPage';
import { GeneralAnalytics } from 'pages/General/GeneralAnalytics';
import { GeneralPage } from 'pages/General/GeneralPage';
import { GoodsPage } from 'pages/GoodAndServices/GoodsPage';
import { SegmentsPage } from 'pages/GoodAndServices/SegmentsPage';
import { IntegrationsAllPage } from 'pages/Integrations/IntegrationsAllPage';
import { IntegrationsConnectedPage } from 'pages/Integrations/IntegrationsConnectedPage';
import {
  CardConstructorAppearancePage,
  CardConstructorCustomFieldsPage,
  CardConstructorPage,
  CardConstructorSetupsListPage,
} from 'pages/Loyalty/CardConstructor';
import { LoyaltyPage } from 'pages/Loyalty/LoyaltyPage';
import { MultilevelSystemPage } from 'pages/Loyalty/MultilevelSystemPage';
import { NotFoundPage } from 'pages/NotFound/NotFoundPage';
import {
  BillingPage,
  BillsPage,
  CompletionActsPage,
  DocumentsPage,
  PaymentsPage,
  VerificationActsPage,
} from 'pages/Profile';
import { ModulesPage } from 'pages/Profile/ModulesPage';
import { RegistriesPage } from 'pages/Profile/RegistriesPage';
import {
  EditSalesPointPage,
  NewSalesPointPage,
  SalesPage,
  ViewSalesPointPage,
} from 'pages/Profile/SalesPointPage';
import { ServicePage } from 'pages/Profile/ServicesPage';
import { TestPage } from 'pages/TestPage/TestPage';
import {
  AppRoutes,
  getRouteCrmSystem,
  getRouteCrmSystemClients,
  getRouteCrmSystemSegments,
  getRouteGoodsAndServicesGoods,
  getRouteGoodsAndServicesSegments,
  getRouteIntegrations,
  getRouteIntegrationsAll,
  getRouteIntegrationsConnected,
  getRouteLogin,
  getRouteLoyaltyBonusesMechanics,
  getRouteLoyaltyCardConstructor,
  getRouteLoyaltyCardConstructorAppearance,
  getRouteLoyaltyCardConstructorCustomFields,
  getRouteLoyaltyMultilevelSystem,
  getRouteNotFound,
  getRouteProfileBilling,
  getRouteProfileBillingModules,
  getRouteProfileBillingRegistries,
  getRouteProfileBillingServices,
  getRouteProfileCurrentSalePoint,
  getRouteProfileDocuments,
  getRouteProfileDocumentsBills,
  getRouteProfileDocumentsCompletionActs,
  getRouteProfileDocumentsPayments,
  getRouteProfileDocumentsVerificationActs,
  getRouteGeneralAnalytics,
  getRouteGeneralDashboard,
  getRouteProfileEditSalePoint,
  getRouteProfileNewSalesPoint,
  getRouteProfileSalesPoint,
  getRouteTest,
} from 'shared/constants/router';
import { PageSuspense } from 'shared/layouts/PageSuspense/PageSuspense';
import type { AppRoutesProps } from 'shared/types/router';

/**
 * По умолчанию все роуты кроме /login защищены.
 */
export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.LOGIN]: {
    path: getRouteLogin(),
    element: <AuthForm />,
    authOnly: false,
  },
  [AppRoutes.GENERAL]: {
    path: getRouteGeneralDashboard(),
    element: <GeneralPage />,
  },
  [AppRoutes.GENERAL_ANALYTICS]: {
    path: getRouteGeneralAnalytics(),
    element: <GeneralAnalytics />,
  },
  [AppRoutes.LOYALTY_BONUSES_MECHANICS]: {
    path: getRouteLoyaltyBonusesMechanics(),
    element: <LoyaltyPage />,
  },
  [AppRoutes.LOYALTY_MULTILEVEL_SYSTEM]: {
    path: getRouteLoyaltyMultilevelSystem(),
    element: <MultilevelSystemPage />,
  },
  [AppRoutes.LOYALTY_CARD_CONSTRUCTOR]: {
    path: getRouteLoyaltyCardConstructor(),
    element: <CardConstructorPage />,
    children: (
      <>
        <Route
          index
          element={<CardConstructorSetupsListPage />}
        />
        <Route
          path={getRouteLoyaltyCardConstructorCustomFields()}
          element={<CardConstructorCustomFieldsPage />}
        />
        <Route
          path={getRouteLoyaltyCardConstructorAppearance()}
          element={<CardConstructorAppearancePage />}
        />
      </>
    ),
  },
  [AppRoutes.CRM_SYSTEM]: {
    path: getRouteCrmSystem(),
    element: <div />,
  },
  [AppRoutes.CRM_SYSTEM_CLIENTS]: {
    path: getRouteCrmSystemClients(),
    element: <ClientsPage />,
  },
  [AppRoutes.CRM_SYSTEM_SEGMENTS]: {
    path: getRouteCrmSystemSegments(),
    element: <CRMSegmentsPage />,
  },
  [AppRoutes.INTEGRATIONS]: {
    path: getRouteIntegrations(),
    element: <div />,
  },
  [AppRoutes.INTEGRATIONS_ALL]: {
    path: getRouteIntegrationsAll(),
    element: <IntegrationsAllPage />,
  },
  [AppRoutes.INTEGRATIONS_CONNECTED]: {
    path: getRouteIntegrationsConnected(),
    element: <IntegrationsConnectedPage />,
  },
  [AppRoutes.GOODS_AND_SERVICES_GOODS]: {
    path: getRouteGoodsAndServicesGoods(),
    element: <GoodsPage />,
  },
  [AppRoutes.GOODS_AND_SERVICES_SEGMENTS]: {
    path: getRouteGoodsAndServicesSegments(),
    element: <SegmentsPage />,
  },
  [AppRoutes.BILLING]: {
    path: getRouteProfileBilling(),
    element: <BillingPage />,
    children: (
      <>
        <Route
          path={getRouteProfileBillingModules()}
          element={
            <PageSuspense>
              <ModulesPage />
            </PageSuspense>
          }
        />
        <Route
          path={getRouteProfileBillingServices()}
          element={
            <PageSuspense>
              <ServicePage />
            </PageSuspense>
          }
        />
        <Route
          path={getRouteProfileBillingRegistries()}
          element={
            <PageSuspense>
              <RegistriesPage />
            </PageSuspense>
          }
        />
      </>
    ),
  },
  [AppRoutes.DOCUMENTS]: {
    path: getRouteProfileDocuments(),
    element: <DocumentsPage />,
    children: (
      <>
        <Route
          path={getRouteProfileDocumentsPayments()}
          element={<PaymentsPage />}
        />
        <Route
          path={getRouteProfileDocumentsBills()}
          element={<BillsPage />}
        />
        <Route
          path={getRouteProfileDocumentsCompletionActs()}
          element={<CompletionActsPage />}
        />
        <Route
          path={getRouteProfileDocumentsVerificationActs()}
          element={<VerificationActsPage />}
        />
      </>
    ),
  },
  [AppRoutes.SALE_POINTS]: {
    path: getRouteProfileSalesPoint(),
    element: <SalesPage />,
    children: (
      <>
        <Route
          path={getRouteProfileNewSalesPoint()}
          element={
            <PageSuspense>
              <NewSalesPointPage />
            </PageSuspense>
          }
        />
        <Route
          path={getRouteProfileEditSalePoint()}
          element={
            <PageSuspense>
              <EditSalesPointPage />
            </PageSuspense>
          }
        />
        <Route
          path={getRouteProfileCurrentSalePoint()}
          element={
            <PageSuspense>
              <ViewSalesPointPage />
            </PageSuspense>
          }
        />
      </>
    ),
  },
  [AppRoutes.NOT_FOUND]: {
    path: getRouteNotFound(),
    element: <NotFoundPage />,
  },
  [AppRoutes.TEST]: {
    path: getRouteTest(),
    element: <TestPage />,
  },
};
