import React, { useCallback, useState } from "react";
import { DiscountTypeAndValueStack } from "../components";
import { Card, Stack, Thumbnail, Button } from "@shopify/polaris";

import { ResourcePicker } from "@shopify/app-bridge-react";

export function ProductDiscountCard({ id }) {
    const [showResourcePicker, setShowResourcePicker] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const toggleResourcePicker = useCallback(
        () => setShowResourcePicker(!showResourcePicker),
        [showResourcePicker]
    );

    const handleProductChange = useCallback(
        (resources) => {
            const selectedProducts = resources.selection.map((product) => {
                return {
                    id: product.id,
                    title: product.title,
                    images: product.images,
                };
            });
            setSelectedProduct(selectedProducts);
            toggleResourcePicker();
        },
        [toggleResourcePicker]
    );
    //

    return (
        <>
            {showResourcePicker && (
                <ResourcePicker
                    resourceType="Product"
                    showVariants={false}
                    selectMultiple={true}
                    onCancel={toggleResourcePicker}
                    onSelection={handleProductChange}
                    open
                />
            )}
            {
                //use selectedProduct to show all the selected products images along with their title
                selectedProduct ? (
                    <Card title={"Discount #" + (id + 1)}>
                        <Card.Section>
                            <DiscountTypeAndValueStack key={id} dtvsid={id} />
                        </Card.Section>
                        <Card.Section>
                            <Stack wrap={false} spacing="loose">
                                {selectedProduct.map((product) => {
                                    return (
                                        <Stack.Item>
                                            <Thumbnail
                                                source={
                                                    product.images[0]
                                                        .originalSrc
                                                }
                                                alt={product.title}
                                            />
                                            <p>{product.title}</p>
                                        </Stack.Item>
                                    );
                                })}
                            </Stack>
                        </Card.Section>
                        <Card.Section>
                            <Button onClick={toggleResourcePicker}>
                                Add More Products
                            </Button>
                        </Card.Section>
                    </Card>
                ) : (
                    <Card title={"Discount #" + (id + 1)}>
                        <Card.Section>
                            <DiscountTypeAndValueStack key={id} dtvsid={id} />
                        </Card.Section>
                        <Card.Section>
                            <Stack vertical spacing="extraTight">
                                <Button onClick={toggleResourcePicker}>
                                    Select Products
                                </Button>
                            </Stack>
                        </Card.Section>
                    </Card>
                )
            }
        </>
    );
}
