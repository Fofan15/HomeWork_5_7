import React, {useContext} from 'react'
import {Box, Button, CircularProgress } from '@mui/material'
import LoginStore from "../Login/LoginStore";
import {AppStoreContext} from "../../App";
import {observer} from "mobx-react-lite";
import RegistrationStore from '../Registration/RegistrationStore';

const Logout = () => {
    const appStore = useContext(AppStoreContext);
    const store = new LoginStore(appStore.authStore);
    const store2 = new RegistrationStore(appStore.authStore)
    return (
        <Box
            sx={{
                marginTop: 5,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        > 
        {!!appStore.authStore.token  && (
            <p 
                className="mt-3 mb-3" 
                style={{ color: 'green', fontSize: 20, fontWeight: 800 }}>{`Your token is: ${appStore.authStore.token}`}
            </p>    
        )}
            {!!appStore.authStore.token  && (
                <Box>
                    <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 3 }}
                    onClick = {async (event) =>
                        {
                          event.preventDefault()
                          await store.logout()
                        }}
                >
                    {store.isLoading ? (
                        <CircularProgress />
                    ) : (
                        'Log Out'
                    )}
               
                    </Button>
            </Box> 
                   
            )}
        </Box>
    )
}

export default observer(Logout)