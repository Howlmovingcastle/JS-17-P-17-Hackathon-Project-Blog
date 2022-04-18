import React, { useEffect } from "react";
import "./TrendingPost.css";
import { Avatar, Card, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";

import AOS from "aos";
import "aos/dist/aos.css";
const TrendingPost = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="container">
      <div data-aos="fade-up" data-aos-duration="1000" className="trending">
        <TrendingUpIcon id='trending-icon' />
        <h2 className="trendig-medium">Trending on Medium</h2>
      </div>
      <div className="trending-wrapper">
        <Card data-aos="fade-up" data-aos-duration="1000">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                01
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 25, height: 25 }}
                  src="https://miro.medium.com/fit/c/20/20/1*abRenZmSXa-oa2rm9tCJwg.png"
                />
                <Typography variant="subtitle2" color="text.dark">
                  Dina Ley in Age of Awareness
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                Teachers Are Done. No, Really.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 5 · 3 min read
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="1000">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                02
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30 }}
                  src="https://miro.medium.com/fit/c/40/40/1*1v3kYlO1sYoqfZLuKzIwbQ.png"
                />
                <Typography variant="subtitle2" color="text.dark">
                  Arthur Hayes
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                The Q-Trap
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 11 · 16 min read
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="1000">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                03
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30 }}
                  src="https://miro.medium.com/fit/c/40/40/1*NtFBQxy0CSE_Z5J9mJ6FNA.jpeg"
                />
                <Typography variant="subtitle2" color="text.dark">
                  Isaiah McCall in Yard Couch
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                Elon Musk: People Don’t Realize What’s Coming
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 4 · 5 min read
                {/* <StarIcon fontSize="small" /> */}
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="1500">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                04
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30 }}
                  src="	https://miro.medium.com/fit/c/40/40/1*fPeSIMBxuXKwcPWR426h1w.jpeg"
                />
                <Typography variant="subtitle2" color="text.dark">
                  FriarWire
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                Padres Announce 2022 Opening Day Roster
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 7 · 2 min read
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="1500">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                05
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30 }}
                  src="https://miro.medium.com/fit/c/40/40/1*oNQb50GcVOwWKokRizEAFA.png"
                />
                <Typography variant="subtitle2" color="text.dark">
                  Hope in Startup Stash
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                4 Common Resume Pitfalls to Avoid
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 1 · 5 min read
              </Typography>
            </Box>
          </CardContent>
        </Card>

        <Card data-aos="fade-up" data-aos-duration="1500">
          <CardContent style={{ display: "flex" }}>
            <Box>
              <Typography variant="h3" color="text.secondary">
                06
              </Typography>
            </Box>
            <Box className="trending-content">
              <Box style={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  alt="Remy Sharp"
                  sx={{ width: 30, height: 30 }}
                  src="https://miro.medium.com/fit/c/40/40/1*qVYCB8Xw85QdWOPEKZqF_A.png"
                />
                <Typography variant="subtitle2" color="text.dark">
                  The Useful Tech in Mac O’Clock
                </Typography>
              </Box>
              <Typography variant="h6" color="text.dark">
                11 Absolutely Useful macOS Utility Apps You Never Knew Existed
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {" "}
                Apr 7 · 7 min read
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendingPost;
