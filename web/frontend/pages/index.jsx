import { Card, Page, TextField, FormLayout, Button } from "@shopify/polaris";
import { useNavigate, TitleBar } from "@shopify/app-bridge-react";

import React, { useCallback, useState } from "react";
import { ProductDiscountCard } from "../components";

export default function HomePage() {
    const navigate = useNavigate();
    const [discountName, setDiscountName] = useState("");

    const [productDiscountCardList, setProductDiscountCardList] = useState([]);

    const handleDiscountNameChange = (value) => {
        setDiscountName(value);
    };

    //write a function to add a new card every time "Add Card" button in clicked
    const handleNewCard = () => {
        setProductDiscountCardList(
            productDiscountCardList.concat(
                <ProductDiscountCard
                    key={productDiscountCardList.length}
                    id={productDiscountCardList.length}
                />
            )
        );
    };

    const handleSubmit = () => {
        // Handle form submission here
    };

    return (
        <Page>
            <TitleBar title="Infringo" primaryAction={null} />
            <Card title="Create Automatic Discount Code" sectioned>
                <FormLayout onSubmit={handleSubmit}>
                    <TextField
                        label="Discount Name"
                        value={discountName}
                        onChange={handleDiscountNameChange}
                    />
                    {productDiscountCardList}
                    <Button onClick={handleNewCard}>
                        Add Discount Selection
                    </Button>

                    <Button primary submit>
                        Create Discount
                    </Button>
                </FormLayout>
            </Card>
        </Page>
    );
}
