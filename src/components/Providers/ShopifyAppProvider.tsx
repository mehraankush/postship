"use client"

import React from 'react';
import {
    AppProvider,
} from '@shopify/polaris';

export function ShopifyAppProvider({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <AppProvider
            i18n={{
                Polaris: {
                    ResourceList: {
                        sortingLabel: 'Sort by',
                        defaultItemSingular: 'item',
                        defaultItemPlural: 'items',
                        showing: 'Showing {itemsCount} {resource}',
                        Item: {
                            viewItem: 'View details for {itemName}',
                        },
                    },
                    Common: {
                        checkbox: 'checkbox',
                    },
                },
            }}
        >
            {children}
        </AppProvider>
    );
}