import {
  DESC_SORT_TYPE,
  QTY_PER_PAGE,
  SORT_BY_STARS,
  TYPESCRIPT_LANG,
} from "../constants";
import { useGetReposQuery } from "../services/reposApi";
import "./Data.css";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

interface IData {
  language?: string;
  sortType?: string;
  orderType?: string;
  qtyPerPage?: number;
  page?: number;
}

export const Data = ({
  language = TYPESCRIPT_LANG,
  sortType = SORT_BY_STARS,
  orderType = DESC_SORT_TYPE,
  qtyPerPage = QTY_PER_PAGE,
  page = 1,
}: IData) => {
  const { data, isLoading } = useGetReposQuery({
    language,
    sortType,
    orderType,
    qtyPerPage,
    page,
  });

  if (isLoading) return <h2> Loading...</h2>;

  if (!data) return <h2>No data found</h2>;

  return (
    <div>
      <ul className="data-list">
        {data.items?.map(
          ({ id, name, stargazers_count, description, html_url }) => (
            <li key={id} className="data-item">
              <div className="data-item__left">
                <div className="data-item__name">{name}</div>
                <div className="data-item__stars">
                  <AiOutlineStar size={"1rem"} />
                  <span className="data-item__stars-qty">
                    {stargazers_count}
                  </span>
                </div>
              </div>
              <div className="data-item__center">
                <div className="data-item__description">{description}</div>
              </div>
              <div className="data-item__right">
                <a
                  className="data-item__link"
                  href={html_url}
                  title={`Go to ${name} github page`}
                  target="_blank"
                >
                  <AiFillGithub />
                </a>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  );
};
