import axios from "axios";
import { NextFunction, Request, Response } from "express";

export const getWeather = async (req: Request, res: Response, next: NextFunction) => {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather?lat=28.53552&lon=77.39103&appid=d800b1c42e490d62d0ea44ffc4aa565b")

    res.json(response.data)
}

// https://api.weatherapi.com/v1/current.json?key=8f9fe970e1a74dcfac471515251604&q=London&aqi=yes