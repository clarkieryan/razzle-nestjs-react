import React from 'react';

interface IState {
  spotifyToken: string | null;
}

interface IProps {
  children: React.ReactNode;
}

interface AuthContextProps {
  spotifyToken: string;
  updateToken: (token: string) => void;
  removeToken: (token: string) => void;
}

const setStoredToken = (token: string) => {
  try {
    localStorage.setItem('spotifyToken', token);
  } catch {
    console.error("Couldn't remove the token");
  }
};

const removeStoredToken = () => {
  try {
    localStorage.removeItem('spotifyToken');
  } catch {
    console.error("Couldn't remove the token");
  }
};

const getToken = (): string | null => {
  try {
    return localStorage.getItem('spotifyToken');
  } catch {
    console.error("Couldn't get the token");
  }
  return null;
};

export const AuthContext = React.createContext<AuthContextProps>({
  spotifyToken: getToken(),
  updateToken: (token: string) => token,
  removeToken: (token: string) => token,
});

export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component<IProps, IState> {
  state = {
    spotifyToken: getToken(),
  };

  private updateToken = (token: string) => {
    setStoredToken(token);
    this.setState({
      spotifyToken: token,
    });
  }

  private removeToken = () => {
    removeStoredToken();
    this.setState({
      spotifyToken: null,
    });
  }

  render() {
    const { children } = this.props;
    const { spotifyToken } = this.state;
    const { updateToken, removeToken } = this;
    const providerValue = {
      spotifyToken,
      removeToken,
      updateToken,
    };
    return (
      <AuthContext.Provider value={providerValue}>
        {children}
      </AuthContext.Provider>
    );
  }
}
