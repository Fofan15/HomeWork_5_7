import React, {ReactElement, FC, useEffect, useState} from "react";
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Pagination,
    Typography
} from '@mui/material'
import * as resourceApi from "../../api/modules/resources"
import {IResources} from "../../interfaces/resources";
import {useParams} from "react-router-dom";

const Resource: FC<any> = (): ReactElement => {
    const [resource, setResource] = useState<IResources | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            const getResource = async () => {
                try {
                    setIsLoading(true)
                    const res = await resourceApi.getById(id)
                    setResource(res.data)
                } catch (e) {
                    if (e instanceof Error) {
                        console.error(e.message)
                    }
                }
                setIsLoading(false)
            }
            getResource()
        }
    }, [id])

    return (
        <Container>
            <Grid container spacing={4} justifyContent="center" m={4}>
                {isLoading ? (
                    <CircularProgress />
                ) : (
                    <>
                        <Card sx={{ maxWidth: 400, backgroundColor: resource?.color }}>
                            <CardContent>
                                <Typography noWrap gutterBottom variant="h6" component="div">
                                    {resource?.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Pantone Value: {resource?.pantone_value}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Year: {resource?.year}
                                </Typography>
                            </CardContent>
                        </Card>
                    </>
                )}
            </Grid>
        </Container>
    );
};

export default Resource;